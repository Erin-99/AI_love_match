'use client';

import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

interface AgreementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AgreementModal({ isOpen, onClose }: AgreementModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mx-auto max-w-2xl w-full bg-background rounded-2xl p-6 shadow-xl"
            >
              <Dialog.Title className="text-xl font-semibold mb-4">
                用户协议和隐私政策
              </Dialog.Title>

              <div className="prose prose-sm max-h-[60vh] overflow-y-auto mb-6">
                <h3>1. 服务协议</h3>
                <p>
                  欢迎使用我们的服务。通过注册或使用本平台，即表示您同意遵守本协议的所有条款。
                </p>

                <h3>2. 隐私保护</h3>
                <p>
                  我们重视您的隐私保护，采取适当的措施保护您的个人信息。详细信息请参阅隐私政策。
                </p>

                <h3>3. 用户责任</h3>
                <p>
                  用户应当遵守相关法律法规，不得从事任何违法或不当行为。
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90"
                >
                  我已了解
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}