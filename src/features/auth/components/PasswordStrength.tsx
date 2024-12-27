'use client';

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const getStrength = () => {
    let score = 0;
    if (!password) return score;

    // 长度检查
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;

    // 包含数字
    if (/\d/.test(password)) score++;
    // 包含小写字母
    if (/[a-z]/.test(password)) score++;
    // 包含大写字母
    if (/[A-Z]/.test(password)) score++;
    // 包含特殊字符
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return Math.min(score, 4);
  };

  const strength = getStrength();
  const getColor = () => {
    switch (strength) {
      case 0: return 'bg-gray-200';
      case 1: return 'bg-red-500';
      case 2: return 'bg-orange-500';
      case 3: return 'bg-yellow-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-200';
    }
  };

  const getMessage = () => {
    switch (strength) {
      case 0: return '请输入密码';
      case 1: return '非常弱';
      case 2: return '弱';
      case 3: return '中等';
      case 4: return '强';
      default: return '';
    }
  };

  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="flex h-1.5 rounded-full bg-gray-100 overflow-hidden">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`flex-1 ${index < strength ? getColor() : 'bg-gray-200'} 
              ${index > 0 ? 'ml-0.5' : ''}`}
          />
        ))}
      </div>
      <p className={`text-xs mt-1 ${getColor().replace('bg-', 'text-')}`}>
        {getMessage()}
      </p>
    </div>
  );
} 